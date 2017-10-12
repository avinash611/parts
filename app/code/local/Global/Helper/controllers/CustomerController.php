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
        if(isset($_FILES['filename']['name']) && $_FILES['filename']['name'] != '') {
        try {
            /* Starting upload */
            $uploader = new Varien_File_Uploader('filename');

            // Any extension would work
            $uploader->setAllowedExtensions(array('jpeg', 'jpg', 'png'));
            $uploader->setAllowRenameFiles(false);

            // Set the file upload mode
            // false -> get the file directly in the specified folder
            // true -> get the file in the product like folders
            //	(file.jpg will go in something like /media/f/i/file.jpg)
            $uploader->setFilesDispersion(false);

            // We set media as the upload dir
            $path = Mage::getBaseDir('media') . DS . 'profile';
            $uploader->save($path, $_FILES['filename']['name']);

        } catch (Exception $e) {

        }

        //this way the name is saved in DB
        $data['profile_image'] = str_replace(" ", "_", $_FILES['filename']['name']);

          //  print_r($data);


    }




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