# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180311185513) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "businesses", force: :cascade do |t|
    t.integer "owner_id"
    t.string "name", null: false
    t.string "price_range"
    t.string "category"
    t.string "address"
    t.string "phone"
    t.string "monday"
    t.string "tuesday"
    t.string "wednesday"
    t.string "thursday"
    t.string "friday"
    t.string "saturday"
    t.string "sunday"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_businesses_on_name"
  end

  create_table "photos", force: :cascade do |t|
    t.string "img_url", null: false
    t.integer "user_id"
    t.integer "business_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["img_url"], name: "index_photos_on_img_url"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "f_name", null: false
    t.string "l_name", null: false
    t.string "zip_code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
