import getNewTickets from "../src/services/zendesk/getNewTicketsService";
import makeZendeskRequest from "../src/services/zendesk/authenticationService";
import filterTicketsByKeyword from "../src/services/zendesk/filterTicketsByKeyword";
import filterTicketsByKeyword2 from "../src/services/zendesk/filterTicketsByKeyword2";

jest.mock('../src/services/zendesk/getNewTicketsService');
const ticketsArray = [
    {
      url: 'https://grzegorzabchelp.zendesk.com/api/v2/tickets/4.json',
      id: 4,
      external_id: null,
      created_at: '2022-05-26T07:58:12Z',
      updated_at: '2022-05-26T07:58:12Z',
      type: null,
      subject: 'access',
      raw_subject: 'access',
      description: 'access',
      priority: null,
      status: 'open',
      recipient: null,
      requester_id: 393092207478,
      submitter_id: 393092207478,
      assignee_id: 393092207478,
      organization_id: 5295847522845,
      group_id: 5295868098205,
      collaborator_ids: [],
      follower_ids: [],
      email_cc_ids: [],
      forum_topic_id: null,
      problem_id: null,
      has_incidents: false,
      is_public: true,
      due_at: null,
      tags: [],
      custom_fields: [],
      satisfaction_rating: null,
      sharing_agreement_ids: [],
      followup_ids: [],
      ticket_form_id: 5295891567005,
      brand_id: 5295847519133,
      allow_channelback: false,
      allow_attachments: true
    },
    {
      url: 'https://grzegorzabchelp.zendesk.com/api/v2/tickets/3.json',
      id: 3,
      external_id: null,
      created_at: '2022-05-26T07:56:27Z',
      updated_at: '2022-05-26T07:56:27Z',
      type: null,
      subject: 'sql',
      raw_subject: 'sql',
      description: 'sql1',
      priority: null,
      status: 'open',
      recipient: null,
      requester_id: 393092207478,
      submitter_id: 393092207478,
      assignee_id: 393092207478,
      organization_id: 5295847522845,
      group_id: 5295868098205,
      collaborator_ids: [],
      follower_ids: [],
      email_cc_ids: [],
      forum_topic_id: null,
      problem_id: null,
      has_incidents: false,
      is_public: true,
      due_at: null,
      tags: [],
      custom_fields: [],
      satisfaction_rating: null,
      sharing_agreement_ids: [],
      followup_ids: [],
      ticket_form_id: 5295891567005,
      brand_id: 5295847519133,
      allow_channelback: false,
      allow_attachments: true
    },
    {
      url: 'https://grzegorzabchelp.zendesk.com/api/v2/tickets/2.json',
      id: 2,
      external_id: null,
      created_at: '2022-05-26T07:55:13Z',
      updated_at: '2022-05-26T07:55:13Z',
      type: null,
      subject: 'test1',
      raw_subject: 'test1',
      description: 'test1',
      priority: null,
      status: 'open',
      recipient: null,
      requester_id: 393092207478,
      submitter_id: 393092207478,
      assignee_id: 393092207478,
      organization_id: 5295847522845,
      group_id: 5295868098205,
      collaborator_ids: [],
      follower_ids: [],
      email_cc_ids: [],
      forum_topic_id: null,
      problem_id: null,
      has_incidents: false,
      is_public: true,
      due_at: null,
      tags: [],
      custom_fields: [],
      satisfaction_rating: null,
      sharing_agreement_ids: [],
      followup_ids: [],
      ticket_form_id: 5295891567005,
      brand_id: 5295847519133,
      allow_channelback: false,
      allow_attachments: true
    },
    {
      url: 'https://grzegorzabchelp.zendesk.com/api/v2/tickets/1.json',
      id: 1,
      external_id: null,
      created_at: '2022-05-26T07:51:16Z',
      updated_at: '2022-05-26T07:51:16Z',
      type: 'incident',
      subject: 'Sample ticket: Meet the ticket',
      raw_subject: 'Sample ticket: Meet the ticket',
      description: 'Hi there,\n' +
        '\n' +
        'I’m sending an email because I’m having a problem setting up your new product. Can you help me troubleshoot?\n' +
        '\n' +
        'Thanks,\n' +
        ' The Customer\n' +
        '\n',
      priority: 'normal',
      status: 'open',
      recipient: null,
      requester_id: 5295854180381,
      submitter_id: 393092207478,
      assignee_id: 393092207478,
      organization_id: null,
      group_id: 5295868098205,
      collaborator_ids: [],
      follower_ids: [],
      email_cc_ids: [],
      forum_topic_id: null,
      problem_id: null,
      has_incidents: false,
      is_public: true,
      due_at: null,
      tags: [ 'sample', 'support', 'zendesk' ],
      custom_fields: [],
      satisfaction_rating: null,
      sharing_agreement_ids: [],
      followup_ids: [],
      ticket_form_id: 5295891567005,
      brand_id: 5295847519133,
      allow_channelback: false,
      allow_attachments: true
    }
  ]

  const ticketsArrayoneL1 = [
    {
      url: 'https://grzegorzabchelp.zendesk.com/api/v2/tickets/4.json',
      id: 4,
      external_id: null,
      created_at: '2022-05-26T07:58:12Z',
      updated_at: '2022-05-26T07:58:12Z',
      type: null,
      subject: 'access',
      raw_subject: 'access',
      description: 'access',
      priority: null,
      status: 'open',
      recipient: null,
      requester_id: 393092207478,
      submitter_id: 393092207478,
      assignee_id: 393092207478,
      organization_id: 5295847522845,
      group_id: 5295868098205,
      collaborator_ids: [],
      follower_ids: [],
      email_cc_ids: [],
      forum_topic_id: null,
      problem_id: null,
      has_incidents: false,
      is_public: true,
      due_at: null,
      tags: [],
      custom_fields: [],
      satisfaction_rating: null,
      sharing_agreement_ids: [],
      followup_ids: [],
      ticket_form_id: 5295891567005,
      brand_id: 5295847519133,
      allow_channelback: false,
      allow_attachments: true
    }]

    const expectedArrayoneL1 = [
{
      url: 'https://grzegorzabchelp.zendesk.com/api/v2/tickets/4.json',
      id: 4,
      external_id: null,
      created_at: '2022-05-26T07:58:12Z',
      updated_at: '2022-05-26T07:58:12Z',
      type: null,
      subject: 'access',
      raw_subject: 'access',
      description: 'access',
      priority: null,
      status: 'open',
      recipient: null,
      requester_id: 393092207478,
      submitter_id: 393092207478,
      assignee_id: 393092207478,
      organization_id: 5295847522845,
      group_id: 5295868098205,
      collaborator_ids: [],
      follower_ids: [],
      email_cc_ids: [],
      forum_topic_id: null,
      problem_id: null,
      has_incidents: false,
      is_public: true,
      due_at: null,
      tags: [],
      custom_fields: [],
      satisfaction_rating: null,
      sharing_agreement_ids: [],
      followup_ids: [],
      ticket_form_id: 5295891567005,
      brand_id: 5295847519133,
      allow_channelback: false,
      allow_attachments: true,
      level: 'L1'

}
    ]

const expectedArray = [
  {
    url: 'https://grzegorzabchelp.zendesk.com/api/v2/tickets/4.json',
    id: 4,
    external_id: null,
    created_at: '2022-05-26T07:58:12Z',
    updated_at: '2022-05-26T07:58:12Z',
    type: null,
    subject: 'access',
    raw_subject: 'access',
    description: 'access',
    priority: null,
    status: 'open',
    recipient: null,
    requester_id: 393092207478,
    submitter_id: 393092207478,
    assignee_id: 393092207478,
    organization_id: 5295847522845,
    group_id: 5295868098205,
    collaborator_ids: [],
    follower_ids: [],
    email_cc_ids: [],
    forum_topic_id: null,
    problem_id: null,
    has_incidents: false,
    is_public: true,
    due_at: null,
    tags: [],
    custom_fields: [],
    satisfaction_rating: null,
    sharing_agreement_ids: [],
    followup_ids: [],
    ticket_form_id: 5295891567005,
    brand_id: 5295847519133,
    allow_channelback: false,
    allow_attachments: true,
    level: 'L1'
  },
  {
    url: 'https://grzegorzabchelp.zendesk.com/api/v2/tickets/3.json',
    id: 3,
    external_id: null,
    created_at: '2022-05-26T07:56:27Z',
    updated_at: '2022-05-26T07:56:27Z',
    type: null,
    subject: 'sql',
    raw_subject: 'sql',
    description: 'sql1',
    priority: null,
    status: 'open',
    recipient: null,
    requester_id: 393092207478,
    submitter_id: 393092207478,
    assignee_id: 393092207478,
    organization_id: 5295847522845,
    group_id: 5295868098205,
    collaborator_ids: [],
    follower_ids: [],
    email_cc_ids: [],
    forum_topic_id: null,
    problem_id: null,
    has_incidents: false,
    is_public: true,
    due_at: null,
    tags: [],
    custom_fields: [],
    satisfaction_rating: null,
    sharing_agreement_ids: [],
    followup_ids: [],
    ticket_form_id: 5295891567005,
    brand_id: 5295847519133,
    allow_channelback: false,
    allow_attachments: true,
    level: 'L2'
  },
  {
    url: 'https://grzegorzabchelp.zendesk.com/api/v2/tickets/2.json',
    id: 2,
    external_id: null,
    created_at: '2022-05-26T07:55:13Z',
    updated_at: '2022-05-26T07:55:13Z',
    type: null,
    subject: 'test1',
    raw_subject: 'test1',
    description: 'test1',
    priority: null,
    status: 'open',
    recipient: null,
    requester_id: 393092207478,
    submitter_id: 393092207478,
    assignee_id: 393092207478,
    organization_id: 5295847522845,
    group_id: 5295868098205,
    collaborator_ids: [],
    follower_ids: [],
    email_cc_ids: [],
    forum_topic_id: null,
    problem_id: null,
    has_incidents: false,
    is_public: true,
    due_at: null,
    tags: [],
    custom_fields: [],
    satisfaction_rating: null,
    sharing_agreement_ids: [],
    followup_ids: [],
    ticket_form_id: 5295891567005,
    brand_id: 5295847519133,
    allow_channelback: false,
    allow_attachments: true,
    level: 'other'
  },
  {
    url: 'https://grzegorzabchelp.zendesk.com/api/v2/tickets/1.json',
    id: 1,
    external_id: null,
    created_at: '2022-05-26T07:51:16Z',
    updated_at: '2022-05-26T07:51:16Z',
    type: 'incident',
    subject: 'Sample ticket: Meet the ticket',
    raw_subject: 'Sample ticket: Meet the ticket',
    description: 'Hi there,\n' +
      '\n' +
      'I’m sending an email because I’m having a problem setting up your new product. Can you help me troubleshoot?\n' +
      '\n' +
      'Thanks,\n' +
      ' The Customer\n' +
      '\n',
    priority: 'normal',
    status: 'open',
    recipient: null,
    requester_id: 5295854180381,
    submitter_id: 393092207478,
    assignee_id: 393092207478,
    organization_id: null,
    group_id: 5295868098205,
    collaborator_ids: [],
    follower_ids: [],
    email_cc_ids: [],
    forum_topic_id: null,
    problem_id: null,
    has_incidents: false,
    is_public: true,
    due_at: null,
    tags: [ 'sample', 'support', 'zendesk' ],
    custom_fields: [],
    satisfaction_rating: null,
    sharing_agreement_ids: [],
    followup_ids: [],
    ticket_form_id: 5295891567005,
    brand_id: 5295847519133,
    allow_channelback: false,
    allow_attachments: true,
    level: 'other'
  }
]



describe('Test filterTicketsByKeyword service', () => {
   
   
    it('returns new tickets from the recent tickets', async () => {
       // expect(await filterTicketsByKeyword2(() => { return { tickets: ticketsArray } })).toEqual(expectedArray);
       expect(await filterTicketsByKeyword2(ticketsArray)).toEqual(expectedArray);
    });

   it('if there are no new tickets - nothing is returned', async () => {
       // expect(await filterTicketsByKeyword2(() => { return { tickets: [] } })).toEqual([]);
      expect(await filterTicketsByKeyword2([])).toEqual([]);
    });
    
    it('one L1 ticket', async () => {
      // expect(await filterTicketsByKeyword2(() => { return { tickets: [] } })).toEqual([]);
     expect(await filterTicketsByKeyword2(ticketsArrayoneL1)).toEqual(expectedArrayoneL1);
   });
  });