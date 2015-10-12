require 'byebug'
class Bench < ActiveRecord::Base
  validates :long, :lat, :description, presence: true

  def self.in_bounds(bounds)
    arr = []
    lower_lat = bounds["southWest"]["lat"].to_f #lat runs north to south. north will be higher bound than south
    upper_lat = bounds["northEast"]["lat"].to_f
    upper_long = bounds["northEast"]["lng"].to_f #lng runs east to west, east will be higher bound than west
    lower_long = bounds["southWest"]["lng"].to_f
    Bench.all.each do |bench|
        # debugger;
      if bench.lat.between?(lower_lat, upper_lat) && bench.long.between?(lower_long, upper_long)
        arr << bench
      end
    end
    arr
  end
end
