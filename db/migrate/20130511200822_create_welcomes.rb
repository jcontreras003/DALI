class CreateWelcomes < ActiveRecord::Migration
  def self.up
    create_table :welcomes do |t|
      t.string :name
      t.text :content
      t.timestamps
    end
  end

  def self.down
    drop_table :welcomes
  end
end
