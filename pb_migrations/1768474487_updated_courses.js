/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_955655590")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_xHfvojOyGY` ON `courses` (\n  `name`,\n  `lang_code`,\n  `level`\n)"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_955655590")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX `idx_xHfvojOyGY` ON `courses` (\n  `name`,\n  `status`,\n  `created_at`\n)"
    ]
  }, collection)

  return app.save(collection)
})
