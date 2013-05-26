class FlightTicket < ActiveRecord::Base
  attr_accessible :traveler_id, :scheduled_flight_id, :seat_number, :luggage_type_id
end
