class MenuSelection < ApplicationRecord
	has_many :menu_items
	belongs_to :user
	belongs_to :order
end
