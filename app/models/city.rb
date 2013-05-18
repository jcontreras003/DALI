class City < ActiveRecord::Base
  attr_accessible :name, :country
   belongs_to :country, :class_name => "Country", :foreign_key => "country_id"
end
