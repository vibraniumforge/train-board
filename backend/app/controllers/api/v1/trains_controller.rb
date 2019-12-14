module Api::V1
class TrainsController < ApplicationController

  def index
    render json: Train.all
  end

end
end