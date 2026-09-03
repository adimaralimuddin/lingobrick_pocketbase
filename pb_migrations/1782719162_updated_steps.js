/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_4284789913")

  // add field
  collection.fields.addAt(30, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text4097009823",
    "max": 0,
    "min": 0,
    "name": "as",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_4284789913")

  // remove field
  collection.fields.removeById("text4097009823")

  return app.save(collection)
})
