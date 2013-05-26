class TravelersController < ApplicationController
  def index
    @travelers = Traveler.all
  end

  def show
    @traveler = Traveler.find(params[:id])
  end

  def new
    @traveler = Traveler.new
  end

  def create
    @traveler = Traveler.new(params[:traveler])
    if @traveler.save
      redirect_to @traveler, :notice => "Successfully created traveler."
    else
      render :action => 'new'
    end
  end

  def edit
    @traveler = Traveler.find(params[:id])
  end

  def update
    @traveler = Traveler.find(params[:id])
    if @traveler.update_attributes(params[:traveler])
      redirect_to @traveler, :notice  => "Successfully updated traveler."
    else
      render :action => 'edit'
    end
  end

  def destroy
    @traveler = Traveler.find(params[:id])
    @traveler.destroy
    redirect_to travelers_url, :notice => "Successfully destroyed traveler."
  end
end
