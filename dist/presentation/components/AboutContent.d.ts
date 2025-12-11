/**
 * About Content Component
 * Displays the list of about items
 */
import React from 'react';
import { AppInfo } from '../../domain/entities/AppInfo';
import { AboutConfig } from '../../domain/entities/AppInfo';
export interface AboutContentProps {
    /** App information to display */
    appInfo: AppInfo;
    /** Configuration for actions */
    config: AboutConfig;
}
export declare const AboutContent: React.FC<AboutContentProps>;
