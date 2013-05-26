require 'test_helper'

class TravelerTest < ActiveSupport::TestCase
  def test_should_be_valid
    assert Traveler.new.valid?
  end
end
