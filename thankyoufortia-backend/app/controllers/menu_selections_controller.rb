class MenuSelectionsController < ApplicationController
  before_action :set_menu_selection, only: [:show, :update, :destroy]

  # GET /menu_selections
  def index
    @menu_selections = MenuSelection.all

    render json: @menu_selections
  end

  # GET /menu_selections/1
  def show
    render json: @menu_selection
  end

  # POST /menu_selections
  def create
    @menu_selection = MenuSelection.new(menu_selection_params)

    if @menu_selection.save
      render json: @menu_selection, status: :created, location: @menu_selection
    else
      render json: @menu_selection.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /menu_selections/1
  def update
    if @menu_selection.update(menu_selection_params)
      render json: @menu_selection
    else
      render json: @menu_selection.errors, status: :unprocessable_entity
    end
  end

  # DELETE /menu_selections/1
  def destroy
    @menu_selection.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_menu_selection
      @menu_selection = MenuSelection.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def menu_selection_params
      params.require(:menu_selection).permit(:menu_item_id, :order_id)
    end
end
