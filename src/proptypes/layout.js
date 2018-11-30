import { ContentProps, RouteProps } from './content';

export const FooterProps = {
  prevRoute: RouteProps,
  nextRoute: RouteProps,
  onClickHandler: PropTypes.func,
};

export const AsideProps = {
  logo: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
  ]),
  nav: PropTypes.element,
  LinkComponent: PropTypes.element,
  listContents: ContentProps,
};

export const ListProps = {
  links: ContentProps,
  isInner: PropTypes.bool,
  LinkComponent: PropTypes.element,
};

export const NavProps = {
  title: PropTypes.string,
  lastUpdate: PropTypes.string,
  version: PropTypes.string,
};

export const LayoutProps = {
  children: PropTypes.node,
  footer: PropTypes.element,
  aside: PropTypes.element,
  nav: PropTypes.element,
  // componentProps
  listProps: ListProps,
  asideProps: AsideProps,
  navProps: NavProps,
  footerProps: FooterProps,
};
