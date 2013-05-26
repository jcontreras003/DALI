require 'test_helper'

class ScheduledFlightsControllerTest < ActionController::TestCase
  def test_index
    get :index
    assert_template 'index'
  end

  def test_show
    get :show, :id => ScheduledFlight.first
    assert_template 'show'
  end

  def test_new
    get :new
    assert_template 'new'
  end

  def test_create_invalid
    ScheduledFlight.any_instance.stubs(:valid?).returns(false)
    post :create
    assert_template 'new'
  end

  def test_create_valid
    ScheduledFlight.any_instance.stubs(:valid?).returns(true)
    post :create
    assert_redirected_to scheduled_flight_url(assigns(:scheduled_flight))
  end

  def test_edit
    get :edit, :id => ScheduledFlight.first
    assert_template 'edit'
  end

  def test_update_invalid
    ScheduledFlight.any_instance.stubs(:valid?).returns(false)
    put :update, :id => ScheduledFlight.first
    assert_template 'edit'
  end

  def test_update_valid
    ScheduledFlight.any_instance.stubs(:valid?).returns(true)
    put :update, :id => ScheduledFlight.first
    assert_redirected_to scheduled_flight_url(assigns(:scheduled_flight))
  end

  def test_destroy
    scheduled_flight = ScheduledFlight.first
    delete :destroy, :id => scheduled_flight
    assert_redirected_to scheduled_flights_url
    assert !ScheduledFlight.exists?(scheduled_flight.id)
  end
end
