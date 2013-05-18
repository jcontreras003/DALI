class CreateCountries < ActiveRecord::Migration
  def self.up
    create_table :countries do |t|
      t.text :name
      t.text :continent
      t.timestamps
    end
  end

  def self.down
    drop_table :countries
  end
end
