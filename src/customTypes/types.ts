export enum SelectedPage {
  Home = 'Home',
  Benefits = 'benefits',
  OurClasses = 'ourClasses',
  ContactUs = 'contactUs'
}

export type TitleProps = {
  children: React.ReactNode;
};

export type SelectedProps = {
  setSelectedPage: (values: SelectedPage) => void;
};


export type BenefitType = {
  icon: React.ReactNode;
  title: String;
  desc: String;
};


export type CallToActionProps = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};