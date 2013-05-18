class CreateAirplanes < ActiveRecord::Migration
  def self.up
    create_table :airplanes do |t|
      t.text :code
      t.text :name
      t.integer :seats
      t.timestamps
    end
  end

  def self.down
    drop_table :airplanes
  end
end
