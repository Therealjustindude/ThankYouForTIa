class Order < ApplicationRecord
	belongs_to :user
	has_many :menu_selections
	has_many :menu_items, through: :menu_selections
end
