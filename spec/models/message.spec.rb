require 'rails_helper'

RSpec.describe Message, type: :model do

  describe '#create' do

    context 'can save' do

      it 'メッセージがあれば保存できる' do
      expect(build(:message, image: nil )).to be_valid
       end

      it '画像があれば保存できる' do
         expect(build(:message, content: nil)).to be_valid
      end
      
      it 'メッセージと画像があれば保存できる' do
        expect(build(:message)).to be_valid
      end
    end

    context 'cant save' do
      
      it 'メッセージも画像も無いと保存できない' do
        message = build(:message, image: nil, content: nil)
        message.valid?
        expect(message.errors[:content]).to include("を入力してください")
      end

      it 'group_idが無いと保存できない'do
       message = build(:message, group_id: nil)
       message.valid?
       expect(message.errors[:group]).to include("を入力してください")
       end

       it 'user_idが無いと保存できない' do
         message = build(:message, user_id: nil)
         message.valid?
         expect(message.errors[:user]).to include("を入力してください")
       end

    end

  end
end
