<?php
/**
 * @package     mod_wl_audioplayer
 * @author      Thomas Winterling
 * @email       info@winterling-labs.com
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 */

defined('_JEXEC') or die;

/**
 * Helper for mod_dd-slider
 *
 * @since  Version 1.0.0.0
 */
class modWL_AudioplayerHelper
{

    public static function getModuleParams ($params)
    {


        jimport( 'joomla.application.module.helper' );
        $module = JModuleHelper::getModule('wl_audioplayer');

        $module_id = $module->id;

        $db = JFactory::getDbo();
        $query = $db->getQuery(true);
        $query->select('params')
            ->from($db->quoteName('#__modules'))
            ->where('id = ' . $db->quote($module_id));
        $db->setQuery($query);

        $moduleparams = (json_decode($db->loadResult()));

        return $moduleparams;
    }


}