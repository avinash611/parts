<?php
/**
 * Created by PhpStorm.
 * User: vaishu
 * Date: 9/29/2017
 * Time: 12:38 AM
 */
class Global_Helper_CustomerController extends Mage_Core_Controller_Front_Action
{
    public function updateCustomerAction()
    {
        $data = $this->getRequest()->getParams();
        $session = Mage::getSingleton('customer/session');
        $customerSessionID = $session->getCustomer()->getId();
        if($data)
        {
            $customer = Mage::getModel('customer/customer')->load($customerSessionID);
            $customer->setWebsiteId(Mage::app()->getWebsite()->getId());
            $customer->addData($data);
            $customer->save();
            $session->addSuccess("Form successfully saved.");
            $this->_redirectReferer();
        }
        else{
            $session->addError("Something went wrong..");
            $this->_redirectReferer();
        }
    }

}