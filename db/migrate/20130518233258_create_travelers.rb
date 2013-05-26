class CreateTravelers < ActiveRecord::Migration
  def self.up
    create_table :travelers do |t|
      t.text :firts_name
      t.text :second_name
      t.text :id_document
      t.text :email
      t.text :phone
      t.id :residence_city_id
      t.timestamps
    end
  end

  def self.down
    drop_table :travelers
  end
end
