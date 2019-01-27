// Definir funciones para http

let lists = require('../../../data')
lists = lists.boards[0].lists
const ERROR = { message: '404. Not Found' }


const controllers = {

    index: (req, res) => {
        res
            .status(200)
            .json({
                data: lists
            })
    },

    find: ({ params }, res) => {
        const list = lists.filter(list => list.id.toString() == params.id)[0]
        list ? res.json({ data: list }).status(200) : res.status(404).json(ERROR)
    },

    create: ({ body }, res) => {

        let newList = Object.assign({ id: lists.length + 1 }, body)
        res.status(200).json({ data: [...lists, newList] })
    },

    update: ({ body, params }, res) => {

        const existId = lists.some(list => list.id == params.id)

        if (existId) {
            const dataUpdated = lists.map(list => {
                return (params.id == list.id) ? body : list;
            })

            res.status(200).json({ data: dataUpdated })
        } else {
            console.log("It doesn't exist ")
        }
    }
}



module.exports = controllers


// find: (req, res) => {
//     const queryId = req.params.id
//     const isId = lists.some(list => list.id == queryId)

//     if (isId) {
//         const list = lists.filter(list => list.id.toString() == queryId)
//         res
//             .json({
//                 data: list
//             })
//             .status(200)

//     } else {
//         res.status(404).json(ERROR)
//     }

// },