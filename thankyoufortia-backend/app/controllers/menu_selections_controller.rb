class MenuSelectionsController < ApplicationController
  before_action :set_menu_selection, only: [:show, :update, :destroy]

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_menu_selection
      @menu_selection = MenuSelection.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def menu_selection_params
      params.require(:menu_selection)
    end
end
