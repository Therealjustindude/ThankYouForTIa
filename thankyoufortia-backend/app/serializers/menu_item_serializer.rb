class MenuItemSerializer < ActiveModel::Serializer
  attributes :id, :title, :ingredient, :category
  has_many :menu_selections
end
