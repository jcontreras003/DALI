class CreateScheduledFlights < ActiveRecord::Migration
  def self.up
    create_table :scheduled_flights do |t|
      t.integer :flight_id
      t.datetime :depature_date
      t.datetime :arrival_date
      t.integer :available_seats
      t.boolean :closed_flight
      t.timestamps
    end
  end

  def self.down
    drop_table :scheduled_flights
  end
end
