import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import {
  Card, CardBody, Col, Button, ButtonToolbar,
} from 'reactstrap';
import { Field, reduxForm } from 'redux-form';
import EyeIcon from 'mdi-react/EyeIcon';
import EmailIcon from 'mdi-react/EmailIcon';
import renderDatePickerField from '../../../../shared/components/form/DatePicker';
import CalendarBlankIcon from 'mdi-react/CalendarBlankIcon';
import AccountSearchIcon from 'mdi-react/AccountSearchIcon';
import renderFileInputField from '../../../../shared/components/form/FileInput';
import renderSelectField from '../../../../shared/components/form/Select';
import renderDropZoneField from '../../../../shared/components/form/DropZone';
import { FaMicrophoneAlt } from 'react-icons/fa';
import Collapse from '../../../../shared/components/Collapse';
import renderMultiSelectField from '../../../../shared/components/form/MultiSelect';

const HorizontalForm = ({ handleSubmit, reset }) => {
  const { t } = useTranslation('common');
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const showPassword = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h5 className="bold-text">{t('Add New Issue')}</h5>
            <h5 className="subhead">Put values to add new issues</h5>
          </div>
          <form className="form form--horizontal" onSubmit={handleSubmit}>
          <Col sm={12} md={6} lg={6}>
            <div className="form__form-group">
              <span className="form__form-group-label">Branch</span>
              <div className="form__form-group-field">
                <Field
                  name="email"
                  component="input"
                  type="text"
                  placeholder="Branch"
                />
              </div>
            </div></Col>
            <Col sm={12} md={6} lg={6}>
            <div className="form__form-group">
              <span className="form__form-group-label">Client</span>
              <div className="form__form-group-field">
                <Field
                  name="description"
                  component="input"
                  type="descrption"
                  placeholder="Client"
                />
              </div>
            </div></Col>
            <Col sm={12} md={6} lg={6}>
            <div className="form__form-group">
              <span className="form__form-group-label">Project/ Building Name</span>
              <div className="form__form-group-field">
                <Field
                  name="description"
                  component="input"
                  type="descrption"
                  placeholder="Project/ Building Name"
                />
              </div>
            </div></Col>
            <Col sm={12} md={6} lg={6}>
            <div className="form__form-group">
              <span className="form__form-group-label">Occurrence</span>
              <div className="form__form-group-field">
                <Field
                  name="description"
                  component="input"
                  type="descrption"
                  placeholder="Occurrence"
                />
              </div>
            </div></Col>
            <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">Position</span>
                <div className="form__form-group-field">
                  <Field
                    name="Position"
                    component={renderSelectField}
                    options={[
                      { value: 'one', label: 'Walls' },
                      { value: 'two', label: 'Ceiling' },
                    ]}
                  />
                </div>
              </div></Col>
              <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">Phenomenon</span>
                <div className="form__form-group-field">
                  <Field
                    name="Phenomenon"
                    component={renderSelectField}
                    options={[
                      { value: 'three', label: 'Cracks' },
                      { value: 'four', label: 'Leakage' },
                    ]}
                  />
                </div>
              </div></Col>
              <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">Disturbance</span>
                <div className="form__form-group-field">
                  <Field
                    name="Disturbance"
                    component={renderSelectField}
                    options={[
                      { value: 'five', label: 'Yes' },
                      { value: 'six', label: 'No' },
                    ]}
                  />
                </div>
              </div></Col>
            <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">Responsibility</span>
                <div className="form__form-group-field">
                  <Field
                    name="Responsibility"
                    component="input"
                    type="text"
                    placeholder="Responsibility"
                  />
                </div>
              </div></Col>
              <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">Status</span>
                <div className="form__form-group-field">
                  <Field
                    name="Status"
                    component={renderSelectField}
                    options={[
                      { value: 'seven', label: 'Completed' },
                      { value: 'eight', label: 'Ongoing' },
                    ]}
                  />
                </div>
              </div></Col>
              <Col sm={12} md={6} lg={6}>
              <div className="form__form-group">
                <span className="form__form-group-label">Level</span>
                <div className="form__form-group-field">
                  <Field
                    name="Level"
                    component={renderSelectField}
                    options={[
                      { value: 'nine', label: 'One' },
                      { value: 'ten', label: 'Two' },
                      { value: 'eleven', label: 'Three' },
                    ]}
                  />
                </div>
              </div></Col>
              <Col sm={12} md={12} lg={12}>
          <form className="form" onSubmit={handleSubmit}>
            <Field
              name="files"
              component={renderDropZoneField}
              customHeight
            />
          </form>
            </Col>

            <ButtonToolbar className="form__button-toolbar">
              <Button color="primary" type="submit">Submit</Button>
              <Button type="button" onClick={reset}>
                Cancel
              </Button>
            </ButtonToolbar>
          </form>
        </CardBody>
      </Card>
    </Col>
  );
};

HorizontalForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'horizontal_form', // a unique identifier for this form
})(HorizontalForm);
