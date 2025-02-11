import type { Meta, StoryObj } from '@storybook/react'
import { Form } from '../../components/form/Form'
import { Col } from '../../components/grid/Col'
import { Row } from '../../components/grid/Row'

/**
 * ## Description
 * A form is a collection of HTML elements used to gather user input. It allows users to enter data, such as text, numbers,
 * or file uploads, and submit it to a server for processing.
 *
 * ## Usage guidelines
 * ### Dos
 * - Input labels:
 *   - Each input field should have a label
 *   - Labels should be short and descriptive
 *   - They should be placed above the input field
 * - Input text:
 *  - If you need to describe an input text you can use the `Form.Group.Text` component
 *  - Add the text below the input
 * - Select:
 *  - First option should be the 'Select...' option
 *  - The options should use the `<option>` tag
 *
 * ### Don'ts
 * - Leave inputs without labels
 */
const meta: Meta<typeof Form> = {
  title: 'Form',
  component: Form,
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof Form>

export const Default: Story = {
  render: () => (
    <Form>
      <Form.Group controlId="basic-form-username">
        <Form.Group.Label>Username</Form.Group.Label>
        <Form.Group.Input type="text" placeholder="Username" />
      </Form.Group>
    </Form>
  )
}

export const AllInputTypes: Story = {
  render: () => (
    <Form>
      <Form.Group controlId="basic-form-username">
        <Form.Group.Label>Username</Form.Group.Label>
        <Form.Group.Input type="text" placeholder="Username" />
      </Form.Group>
      <Form.Group controlId="basic-form-email">
        <Form.Group.Label>Email</Form.Group.Label>
        <Form.Group.Input type="email" placeholder="Email" />
      </Form.Group>
      <Form.Group controlId="basic-form-password">
        <Form.Group.Label>Password</Form.Group.Label>
        <Form.Group.Input type="password" placeholder="Password" />
      </Form.Group>
    </Form>
  )
}

export const FieldWithText: Story = {
  render: () => (
    <Form>
      <Form.Group controlId="basic-form-username">
        <Form.Group.Label>Username</Form.Group.Label>
        <Form.Group.Input type="text" placeholder="Username" />
        <Form.Group.Text>
          Create a valid username of 2 to 60 characters in length containing letters (a-Z), numbers
          (0-9), dashes (-), underscores (_), and periods (.).
        </Form.Group.Text>
      </Form.Group>
    </Form>
  )
}

export const RequiredField: Story = {
  render: () => (
    <Form>
      <Form.Group controlId="basic-form-email" required>
        <Form.Group.Label>Email</Form.Group.Label>
        <Form.Group.Input type="email" placeholder="Email" aria-label="Disabled input example" />
      </Form.Group>
    </Form>
  )
}

export const FieldWithMessage: Story = {
  render: () => (
    <Form>
      <Form.Group controlId="basic-form-email" required>
        <Form.Group.Label message="This is your personal email">Email</Form.Group.Label>
        <Form.Group.Input type="email" placeholder="Email" aria-label="Disabled input example" />
      </Form.Group>
    </Form>
  )
}

export const ReadOnlyInput: Story = {
  render: () => (
    <Form>
      <Form.Group controlId="basic-form-email">
        <Form.Group.Label>Email</Form.Group.Label>
        <Form.Group.Input type="email" readOnly defaultValue="text.email@example.com" />
      </Form.Group>
    </Form>
  )
}

export const InputWithPrefix: Story = {
  render: () => (
    <Form>
      <Form.Group controlId="basic-form-identifier">
        <Form.Group.Label>Identifier</Form.Group.Label>
        <Form.Group.Input type="text" placeholder="Identifier" prefix="https://dataverse.org/" />
      </Form.Group>
    </Form>
  )
}

export const Select: Story = {
  render: () => (
    <Form>
      <Form.Group controlId="basic-form-select">
        <Form.Group.Label>Selector</Form.Group.Label>
        <Form.Group.Select>
          <option>Select...</option>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </Form.Group.Select>
      </Form.Group>
    </Form>
  )
}

export const TextArea: Story = {
  render: () => (
    <Form>
      <Form.Group controlId="basic-form-description">
        <Form.Group.Label>Description</Form.Group.Label>
        <Form.Group.TextArea />
      </Form.Group>
    </Form>
  )
}
export const Checkbox: Story = {
  render: () => (
    <Form>
      <Form.GroupWithMultipleFields title="Metadata Fields">
        <Form.Group.Checkbox
          defaultChecked
          name="metadata-field"
          label="Citation Metadata"
          id="basic-form-citation-metadata"
        />
        <Form.Group.Checkbox
          required
          name="metadata-field"
          label="Geospatial Metadata"
          id="basic-form-geospatial-metadata"
        />
        <Form.Group.Checkbox
          name="metadata-field"
          label="Social Science and Humanities Metadata"
          id="basic-form-social-science-metadata"
        />
      </Form.GroupWithMultipleFields>
    </Form>
  )
}

export const GroupWithMultipleFields: Story = {
  render: () => (
    <Form>
      <Form.GroupWithMultipleFields
        title="Related Publication"
        message="The article or report that uses the data in the Dataset. The full list of related publications will be displayed on the metadata tab"
        withDynamicFields>
        <Row>
          <Form.Group as={Col} controlId="basic-form-citation">
            <Form.Group.Label message="The full bibliographic citation for the related publication">
              Citation
            </Form.Group.Label>
            <Form.Group.TextArea />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="basic-form-identifier-type">
            <Form.Group.Label message="The type of identifier that uniquely identifies a related publication">
              Identifier Type
            </Form.Group.Label>
            <Form.Group.Select>
              <option>Select...</option>
              <option value="doi">doi</option>
              <option value="isbn">isbn</option>
              <option value="url">url</option>
            </Form.Group.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="basic-form-identifier">
            <Form.Group.Label message="The identifier for a related publication">
              Identifier
            </Form.Group.Label>
            <Form.Group.Input type="text" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="basic-form-url" sm={6}>
            <Form.Group.Label message="The URL form of the identifier entered in the Identifier field, e.g. the DOI URL if a DOI was entered in the Identifier field. Used to display what was entered in the ID Type and ID Number fields as a link. If what was entered in the Identifier field has no URL form, the URL of the publication webpage is used, e.g. a journal article webpage">
              URL
            </Form.Group.Label>
            <Form.Group.Input type="text" placeholder="https://" />
          </Form.Group>
        </Row>
      </Form.GroupWithMultipleFields>
    </Form>
  )
}

export const FormValidation: Story = {
  render: () => (
    <Form validated>
      <Form.GroupWithMultipleFields
        title="Author"
        required
        message="The entity, e.g. a person or organization, that created the Dataset"
        withDynamicFields>
        <Row>
          <Form.Group as={Col} controlId="basic-form-name" required>
            <Form.Group.Label message="The name of the author, such as the person's name or the name of an organization">
              Name
            </Form.Group.Label>
            <Form.Group.Input type="text" placeholder="Name" />
          </Form.Group>
          <Form.Group as={Col} controlId="basic-form-affiliation">
            <Form.Group.Label message="The name of the entity affiliated with the author, e.g. an organization's name">
              Affiliation
            </Form.Group.Label>
            <Form.Group.Input type="text" placeholder="Affiliation" />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId="basic-form-identifier-type">
            <Form.Group.Label message="The type of identifier that uniquely identifies the author (e.g. ORCID, ISNI)">
              Identifier Type
            </Form.Group.Label>
            <Form.Group.Select>
              <option>Select...</option>
              <option value="1">Option 1</option>
              <option value="2">Option 2</option>
              <option value="3">Option 3</option>
            </Form.Group.Select>
          </Form.Group>
          <Form.Group as={Col} controlId="basic-form-identifier" required>
            <Form.Group.Label message="Uniquely identifies the author when paired with an identifier type">
              Identifier
            </Form.Group.Label>
            <Form.Group.Input type="text" placeholder="Identifier" defaultValue="123456" />
          </Form.Group>
        </Row>
      </Form.GroupWithMultipleFields>
    </Form>
  )
}
