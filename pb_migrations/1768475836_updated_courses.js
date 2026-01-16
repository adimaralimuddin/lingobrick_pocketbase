/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_955655590")

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select1542800728",
    "maxSelect": 1,
    "name": "lang_code",
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

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_955655590")

  // update field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select1542800728",
    "maxSelect": 1,
    "name": "lang_code",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "es",
      "jp",
      "fr"
    ]
  }))

  return app.save(collection)
})
