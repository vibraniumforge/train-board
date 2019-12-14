ActiveRecord::Schema.define(version: 2019_12_14_223543) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "trains", force: :cascade do |t|
    t.string "destination"
    t.string "newtime"
    t.string "newtime24"
    t.string "origin"
    t.string "remarks_boarding"
    t.string "scheduled"
    t.string "scheduled24"
    t.string "service"
    t.string "trainno"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
