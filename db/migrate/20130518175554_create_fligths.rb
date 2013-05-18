class CreateFligths < ActiveRecord::Migration
  def self.up
    create_table :fligths do |t|
      t.text :code
      t.datetime :date_time
      t.integer :origin_airport_id
      t.integer :destination_airport_id
      t.integer :airplane_id
      t.timestamps
    end
  end

  def self.down
    drop_table :fligths
  end
end
