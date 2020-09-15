class MenuItemSerializer < ActiveModel::Serializer
  attributes :id, :title, :ingredient, :category
end
