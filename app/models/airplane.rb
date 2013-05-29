class Airplane < ActiveRecord::Base
  attr_accessible :code, :name, :seats
  
  def self.get_all_airplanes
    Airplane.all.collect{|x| [x.name, x.id]}
  end
end
