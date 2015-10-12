# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

benches = Bench.create([
  {description: "Market Mid", long:-122.412651, lat:37.780179},
  {description: "SOMA", long:-122.402608, lat:37.780755},
  {description: "Nob Hill", long:-122.415912, lat:37.792829},
  {description: "Coit Tower", long:-122.405655, lat:37.801714},
  {description: "North Beach", long:-122.412264, lat:37.803409},
  {description: "FiDi", long:-122.400420, lat:37.794288},
  {description: "Pac. Heights", long:-122.439516, lat:37.791948},
  {description: "Laurel Heights", long: -122.454579, lat:37.783096},
  {description: "Ghetto Loin", long:-122.416298, lat:37.784622},
  {description: "Golden Gate Park", long:-122.467196, lat:37.768645},
  {description: "Sunset", long:-122.487495, lat:37.747134},
  {description: "Forest Hill", long:-122.464728, lat:37.747100},
  {description: "Mission", long:-122.418036, lat:37.761216},
  {description: "Bernal Heights", long:-122.417436, lat:37.739499},
  {description: "Potrero Hill", long:-122.400355, lat:37.757687},
  {description: "Dog Patch", long:-122.389026, lat:37.756873},
  {description: "Richmond", long:-122.480950, lat:37.780620}])
