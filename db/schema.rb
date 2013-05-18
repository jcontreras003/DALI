# encoding: UTF-8
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
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130518180832) do

  create_table "airplanes", :force => true do |t|
    t.text     "code"
    t.text     "name"
    t.integer  "seats"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "airports", :force => true do |t|
    t.text     "code"
    t.text     "name"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "cities", :force => true do |t|
    t.text     "name"
    t.integer  "country_id"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "countries", :force => true do |t|
    t.text     "name"
    t.text     "continent"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

  create_table "fligths", :force => true do |t|
    t.text     "code"
    t.datetime "date_time"
    t.integer  "origin_airport_id"
    t.integer  "destination_airport_id"
    t.integer  "airplane_id"
    t.datetime "created_at",             :null => false
    t.datetime "updated_at",             :null => false
  end

  create_table "users", :force => true do |t|
    t.string   "username"
    t.string   "email"
    t.string   "password_hash"
    t.string   "password_salt"
    t.datetime "created_at",    :null => false
    t.datetime "updated_at",    :null => false
  end

  create_table "welcomes", :force => true do |t|
    t.string   "name"
    t.text     "content"
    t.datetime "created_at", :null => false
    t.datetime "updated_at", :null => false
  end

end
