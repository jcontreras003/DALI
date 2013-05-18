require 'test_helper'

class FligthTest < ActiveSupport::TestCase
  def test_should_be_valid
    assert Fligth.new.valid?
  end
end
