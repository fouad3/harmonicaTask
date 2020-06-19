import React from 'react';
import {Platform} from 'react-native';
import {Icon} from 'react-native-elements';
import BirthdayIcon from '../assets/icons/iconBirthday.svg';
import JobIcon from '../assets/icons/iconJob.svg';
import LocationIcon from '../assets/icons/iconLocation.svg';
import HometownIcon from '../assets/icons/iconHometown.svg';
import HeartIcon from '../assets/icons/iconHeart.svg';
import ReligionIcon from '../assets/icons/iconReligion.svg';
import PraysIcon from '../assets/icons/Prays.svg';
import HeightIcon from '../assets/icons/iconHieght.svg';
import SmokeIcon from '../assets/icons/iconSmoking.svg';
import HaveKidsIcon from '../assets/icons/iconHaveKids.svg';

export function getItemInfo(name) {
  const itemsList = {
    age: {
      getText(text) {
        const fullText = `${text} years old`;
        return fullText;
      },
      getIcon() {
        return (
          <Icon
            Component={() => {
              return <BirthdayIcon width="20" height="20" />;
            }}
          />
        );
      },
    },
    job: {
      getIcon() {
        return (
          <Icon
            Component={() => {
              return <JobIcon width="20" height="20" />;
            }}
          />
        );
      },
    },
    location: {
      getText(text) {
        const fullText = `Lives in ${text}`;
        return fullText;
      },
      getIcon() {
        return (
          <Icon
            Component={() => {
              return <LocationIcon width="20" height="20" />;
            }}
          />
        );
      },
    },
    homeTown: {
      getText(text) {
        const fullText = `From ${text}`;
        return fullText;
      },
      getIcon() {
        return (
          <Icon
            Component={() => {
              return <HometownIcon width="20" height="20" />;
            }}
          />
        );
      },
    },
    marriage: {
      getIcon() {
        return (
          <Icon
            Component={() => {
              return <HeartIcon width="20" height="20" />;
            }}
          />
        );
      },
    },
    religion: {
      getIcon() {
        return (
          <Icon
            Component={() => {
              return <ReligionIcon width="20" height="20" />;
            }}
          />
        );
      },
    },
    pray: {
      getIcon() {
        return (
          <Icon
            Component={() => {
              return <PraysIcon width="20" height="20" />;
            }}
          />
        );
      },
    },
    height: {
      getIcon() {
        return (
          <Icon
            Component={() => {
              return <HeightIcon width="20" height="20" />;
            }}
          />
        );
      },
    },
    smoke: {
      getIcon() {
        return (
          <Icon
            Component={() => {
              return <SmokeIcon width="20" height="20" />;
            }}
          />
        );
      },
    },
    kids: {
      getIcon() {
        return (
          <Icon
            Component={() => {
              return <HaveKidsIcon width="20" height="20" />;
            }}
          />
        );
      },
    },
  };
  return typeof name === 'undefined' ? itemsList : itemsList[name];
}

export const fontName = {
  regular:
    Platform.OS === 'ios' ? 'Skolar Sans Latn TEST' : 'SkolarSansRegular',
  semiBold:
    Platform.OS === 'ios' ? 'Skolar Sans Latn TEST' : 'SkolarSansSemibold',
  bold: Platform.OS === 'ios' ? 'Skolar Sans Latn TEST' : 'SkolarSansBold',
  extraBold:
    Platform.OS === 'ios' ? 'Skolar Sans Latn TEST' : 'SkolarSansExtrabold',
};
