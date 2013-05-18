class Fligth < ActiveRecord::Base
  attr_accessible :code, :date_time, :origin_airport, :destination_airport, :airplane
  belongs_to :origin_airport, :class_name => "Airport", :foreign_key => "origin_airport_id"
  belongs_to :destination_airport, :class_name => "Airport", :foreign_key => "destination_airport_id"
  belongs_to :airplane, :class_name => "Airplane", :foreign_key => "airplane_id"
end
