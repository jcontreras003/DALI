class CreateFlightTickets < ActiveRecord::Migration
  def self.up
    create_table :flight_tickets do |t|
      t.integer :traveler_id
      t.integer :scheduled_flight_id
      t.text :seat_number
      t.integer :luggage_type_id
      t.timestamps
    end
  end

  def self.down
    drop_table :flight_tickets
  end
end
