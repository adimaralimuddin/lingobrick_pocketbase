/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_955655590")

  // remove field
  collection.fields.removeById("select1542800728")

  // add field
  collection.fields.addAt(10, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text539535361",
    "max": 0,
    "min": 0,
    "name": "langCode",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_955655590")

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select1542800728",
    "maxSelect": 1,
    "name": "langCode",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "ES",
      "JP",
      "FR",
      "ID",
      "HI"
    ]
  }))

  // remove field
  collection.fields.removeById("text539535361")

  return app.save(collection)
})
