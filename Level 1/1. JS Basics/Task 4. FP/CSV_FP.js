/* Задача:
сделать функцию, которая принимает текст в формате CSV,
а возвращает функцию, которая будет принимать на вход любой текст,
и заменять в нём названия городов на строку вида
 "название города (Х место в ТОП-10 самых крупных городов Украины, население УУУУУУ человек)".
*/

function parseCities(csvString) {
    let cities = csvString.split("\n")
        .map((line) => line.trim())
        .filter(i => i.match(/^(\d{2}\.\d{2},){2}[а-щьюяїієґ'\-\s]+,\d+/i))
        .map(i => {
            let o = i.split(",");
            return {
                "x": +o[0],
                "y": +o[1],
                "name": o[2],
                "population": +o[3]
            }
        })
        .sort((a, b) => +b.population - +a.population)
        .slice(0, 10)
        .reduce(function (acc, e, i) {
            acc[e.name] = {"population": e.population, "rating": i + 1};
            return acc;
        }, {})

    // функция2: принимает текст, возвращает... обогащенный текст.
    return text => {
        // fixme potential problem if there will be a cities named like "Виска" та "Мала Виска"
        let clone = text;
        for (let city in cities) {
            clone = clone.replace(city, `${city} (${cities[city].rating} місце у ТОП-10 найбільших міст України, населення ${cities[city].population} людей)`)
        }
        return clone;
    }
}

const CSV_TEMPLATE = `44.38,34.33,Алушта,31440,
  49.46,30.17,Біла Церква,200131,
49.54,28.49,Бердичів,87575,#некоммент

#
46.49,36.58,#Бердянськ,121692,
49.15,28.41,Вінниця,356665,
#45.40,34.29,Джанкой,43343,

# в этом файле три строки-коммента :)`


const testTextTemplate = `Вперше назва «Біла Церква» згадується в Іпатіївському літописі 1555 року.
Алушта (крим. Aluşta) — місто в Україні республіканського підпорядкування у складі Автономної Республіки Крим.
Онлайн продаж квитків на поїзд Вінниця-Біла Церква за низькими цінами.
Джанкой — адміністративний центр Джанкойського району.
`

const markBiggestCities = parseCities(CSV_TEMPLATE)

console.log(`TEMPLATE:
${testTextTemplate}

FUNCTION RESULT:
${markBiggestCities(testTextTemplate)}`)