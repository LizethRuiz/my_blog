import React from "react";
import classNames from "classnames";
import { SectionTilesProps } from "../../utils/SectionProps";
import SectionHeader from "./partials/SectionHeader";
import Image from "../elements/Image";

const propTypes = {
  ...SectionTilesProps.types,
};

const defaultProps = {
  ...SectionTilesProps.defaults,
};
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {
  const outerClasses = classNames(
    "features-tiles section",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "features-tiles-inner section-inner pt-0",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  const tilesClasses = classNames(
    "tiles-wrap center-content",
    pushLeft && "push-left"
  );

  const sectionHeader = {
    title: "My English Class, Diana Lizeth Ruiz Valdez",
    paragraph:
      "Hi!, my name is Diana Lizeth, I'm 21 years old and I'm from Ahome Sinaloa... I'm backend developer. Let's go!",
  };

  const sectionVocabulary = {
    title: "Vocabulary",
  };

  const keyWords = {
    title: "Key Words TEDx Video",
    paragraph:
      "tools, only 4% are conversations speakers native, students are judge more on correctness than clarity,the english is a tool to use to get a result, english converations",
  };
  return (
    <section {...props} className={outerClasses}>
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      className="m-0"
                      src={require("./../../assets/images/mama.jpeg")}
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">My Mom</h4>
                  <p className="m-0 text-sm">
                    My Mom is Socorro Valdez Robles, she is 43 years old, and
                    she from San José, Ahome, Sinaloa.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      className={(className = "m-0")}
                      src={require("./../../assets/images/siomara.jpeg")}
                      alt="Features tile icon 06"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">My Sister</h4>
                  <p className="m-0 text-sm">
                    My sister is Siomara Ruiz Valdez, she is 9 years old, she
                    from Ahome, Sinaloa.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <SectionHeader data={sectionVocabulary} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      className="m-0"
                      src={require("./../../assets/images/age.png")}
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Age</h4>
                  <p className="m-0 text-sm">I´m from 21 years old</p>
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      className="m-0"
                      src={require("./../../assets/images/male.png")}
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Male</h4>
                  <p className="m-0 text-sm">
                    The name of the best male athlete will be known tomorrow.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      className={(className = "m-0")}
                      src={require("./../../assets/images/female3.png")}
                      alt="Features tile icon 06"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Female</h4>
                  <p className="m-0 text-sm">
                    The ratio of male to female students is by and large equal.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      className="m-0"
                      src={require("./../../assets/images/meet.png")}
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Meet</h4>
                  <p className="m-0 text-sm">The meet is in zoom</p>
                </div>
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      className="m-0"
                      src={require("./../../assets/images/abc.png")}
                      alt="Features tile icon 01"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Spell</h4>
                  <p className="m-0 text-sm">Lizeth spelled its L-I-Z-E-T-H</p>
                </div>
              </div>
            </div>
            <div
              className="tiles-item reveal-from-bottom"
              data-reveal-delay="400"
            >
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      className={(className = "m-0")}
                      src={require("./../../assets/images/pron2.png")}
                      alt="Features tile icon 06"
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">Others</h4>
                  <p className="m-0 text-sm">
                    The pronouns; my, your, his, her, its, our ,their
                  </p>
                </div>
              </div>
            </div>
          </div>
          <SectionHeader data={keyWords} className="center-content" />
        </div>
      </div>
    </section>
  );
};

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;
