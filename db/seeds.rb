# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
    countries = Country.create([{name: 'Espana', continent: 'Europa'}, {name: 'Holanda', continent: 'Europa'}])
    cities = City.create([{ name: 'Barcelona', country: countries.first }, { name: 'Madrid', country: countries.first }])
    airplanes = Airplane.create([{code: 'UZX', name: 'Airbus 300', seats:  200}])
    airports = Airport.create([{code: 'MAD', name: 'BARAJAS'}, {code: 'BCN', name: 'El Prat'}])
    fligths = Fligth.create([{code: '5691', date_time: '2012-2-2'.to_date, origin_airport: airports.first, destination_airport: airports.second, airplane: airplanes.first}])
    
    #   Mayor.create(name: 'Emanuel', city: cities.first)
