require 'test_helper'

class AirplanesControllerTest < ActionController::TestCase
  def test_index
    get :index
    assert_template 'index'
  end

  def test_show
    get :show, :id => Airplane.first
    assert_template 'show'
  end

  def test_new
    get :new
    assert_template 'new'
  end

  def test_create_invalid
    Airplane.any_instance.stubs(:valid?).returns(false)
    post :create
    assert_template 'new'
  end

  def test_create_valid
    Airplane.any_instance.stubs(:valid?).returns(true)
    post :create
    assert_redirected_to airplane_url(assigns(:airplane))
  end

  def test_edit
    get :edit, :id => Airplane.first
    assert_template 'edit'
  end

  def test_update_invalid
    Airplane.any_instance.stubs(:valid?).returns(false)
    put :update, :id => Airplane.first
    assert_template 'edit'
  end

  def test_update_valid
    Airplane.any_instance.stubs(:valid?).returns(true)
    put :update, :id => Airplane.first
    assert_redirected_to airplane_url(assigns(:airplane))
  end

  def test_destroy
    airplane = Airplane.first
    delete :destroy, :id => airplane
    assert_redirected_to airplanes_url
    assert !Airplane.exists?(airplane.id)
  end
end
