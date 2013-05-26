require 'test_helper'

class FlightTicketsControllerTest < ActionController::TestCase
  def test_index
    get :index
    assert_template 'index'
  end

  def test_show
    get :show, :id => FlightTicket.first
    assert_template 'show'
  end

  def test_new
    get :new
    assert_template 'new'
  end

  def test_create_invalid
    FlightTicket.any_instance.stubs(:valid?).returns(false)
    post :create
    assert_template 'new'
  end

  def test_create_valid
    FlightTicket.any_instance.stubs(:valid?).returns(true)
    post :create
    assert_redirected_to flight_ticket_url(assigns(:flight_ticket))
  end

  def test_edit
    get :edit, :id => FlightTicket.first
    assert_template 'edit'
  end

  def test_update_invalid
    FlightTicket.any_instance.stubs(:valid?).returns(false)
    put :update, :id => FlightTicket.first
    assert_template 'edit'
  end

  def test_update_valid
    FlightTicket.any_instance.stubs(:valid?).returns(true)
    put :update, :id => FlightTicket.first
    assert_redirected_to flight_ticket_url(assigns(:flight_ticket))
  end

  def test_destroy
    flight_ticket = FlightTicket.first
    delete :destroy, :id => flight_ticket
    assert_redirected_to flight_tickets_url
    assert !FlightTicket.exists?(flight_ticket.id)
  end
end
