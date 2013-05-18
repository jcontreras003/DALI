class AirplanesController < ApplicationController
  def index
    @airplanes = Airplane.all
  end

  def show
    @airplane = Airplane.find(params[:id])
  end

  def new
    @airplane = Airplane.new
  end

  def create
    @airplane = Airplane.new(params[:airplane])
    if @airplane.save
      redirect_to @airplane, :notice => "Successfully created airplane."
    else
      render :action => 'new'
    end
  end

  def edit
    @airplane = Airplane.find(params[:id])
  end

  def update
    @airplane = Airplane.find(params[:id])
    if @airplane.update_attributes(params[:airplane])
      redirect_to @airplane, :notice  => "Successfully updated airplane."
    else
      render :action => 'edit'
    end
  end

  def destroy
    @airplane = Airplane.find(params[:id])
    @airplane.destroy
    redirect_to airplanes_url, :notice => "Successfully destroyed airplane."
  end
end
