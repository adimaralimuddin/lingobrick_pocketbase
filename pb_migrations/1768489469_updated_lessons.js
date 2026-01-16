/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2920376115")

  // add field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "number1177347317",
    "max": null,
    "min": null,
    "name": "position",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "json3622966325",
    "maxSize": 0,
    "name": "meta",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "json"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "hidden": false,
    "id": "date1257476049",
    "max": "",
    "min": "",
    "name": "deleted_at",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "date"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1843675174",
    "max": 0,
    "min": 0,
    "name": "description",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select2363381545",
    "maxSelect": 2,
    "name": "type",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "regular",
      "lingoWorld",
      "checkpoint",
      "lingoTalk"
    ]
  }))

  // update field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "autodate2990389176",
    "name": "created_at",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // update field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "autodate3332085495",
    "name": "updated_at",
    "onCreate": true,
    "onUpdate": true,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2920376115")

  // remove field
  collection.fields.removeById("number1177347317")

  // remove field
  collection.fields.removeById("json3622966325")

  // remove field
  collection.fields.removeById("date1257476049")

  // remove field
  collection.fields.removeById("text1843675174")

  // remove field
  collection.fields.removeById("select2363381545")

  // update field
  collection.fields.addAt(3, new Field({
    "hidden": false,
    "id": "autodate2990389176",
    "name": "created",
    "onCreate": true,
    "onUpdate": false,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  // update field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "autodate3332085495",
    "name": "updated",
    "onCreate": true,
    "onUpdate": true,
    "presentable": false,
    "system": false,
    "type": "autodate"
  }))

  return app.save(collection)
})
