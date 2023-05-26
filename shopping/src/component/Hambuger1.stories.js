import Hambuger1 from "./Hambuger1";
import { action } from '@storybook/addon-actions'
import { useState } from "react";

export default{
    title:'Basic/Hambuger',
    component: Hambuger1,
};

export const Default = {
    args:{
        page1: '상품리스트 페이지',
        page2: '북마크 페이지',
        
    },
};

  
  export const Text = () => (
    <Hambuger1 onClick={action('clicked')}>Hello Button</Hambuger1>
  )
  
 