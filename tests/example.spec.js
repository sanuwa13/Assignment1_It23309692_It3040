const { test, expect } = require('@playwright/test');

// Standard execution steps for functional test cases:
// 1. Enter Singlish text. 2. Observe real-time output. 3. Verify content. [cite: 302-305]

test.describe('Singlish to Sinhala Translation - Complete Suite', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.swifttranslator.com');
  });

  // --- 24 POSITIVE FUNCTIONAL TESTS (Pos_Fun) ---
  // These are expected to PASS in your terminal. [cite: 307]

  test('Pos_Fun_0001: Medium mixed language input with slang', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('machan heta party ekata uba yanava nam mamath ennam yanna. gihilla kalin gedhara emu heta udenma mata office ekata yanna thiyenava. nam mamath ennam yanna.', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('මචන් හෙට party එකට උබ යනව නම් මමත් එන්නම් යන්න. ගිහිල්ල කලින් ගෙදර එමු හෙට උඩෙන්ම මට office එකට යන්න තියෙනව.');
  });

  test('Pos_Fun_0002: Short question phrase', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('oyaa dhavalta kaala dha inne?', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('ඔයා දවල්ට කාල ද ඉන්නේ?');
  });

  test('Pos_Fun_0003: Word combination / phrase pattern', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('mama iskoole yanava, haebayi vahina nisaa dhanma yanne nae', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('මම ඉස්කෝලෙ යනව, හැබයි වහින නිසා දන්ම යන්නෙ නැ');
  });

  test('Pos_Fun_0004: Mixed singlish + English', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('Zoom meeting ekak thiyenavaa adha lunch ekata kalin', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('Zoom meeting එකක් තියෙනවා අද lunch එකට කලින්');
  });

  test('Pos_Fun_0005: Sinhala output updates in real time', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('mama bus ekata naginna yanne', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('මම bus එකට නගින්න යන්නෙ');
  });

  test('Pos_Fun_0006: Future tense sentence', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('Malli Colombo yanna hadhannee.', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('මල්ලි Colombo යන්න හදන්නේ.');
  });

  test('Pos_Fun_0007: Punctuation/numbers', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('mata Rs.500 dhenna', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('මට Rs.500 දෙන්න');
  });

  test('Pos_Fun_0008: Long mixed paragraph', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('machan adha lunch ekata api KFC ekata yamu dha? Minura laga voucher ekkuth thiyenava, apita discount ekkuth hambeyi. kaevata passe film ekak balanna yamu api 4pm valata vithara.', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('මචන් අද lunch එකට අපි KFC එකට යමු ද? මිනුර ලග voucher එක්කුත් තියෙනව, අපිට discount එක්කුත් හම්බෙයි. කැවට පස්සෙ film එකක් බලන්න යමු අපි 4pm වලට විතර.');
  });

  test('Pos_Fun_0009: Daily language usage', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('mama ehema karannee naehae.', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('මම එහෙම කරන්නේ නැහැ.');
  });

  test('Pos_Fun_0010: Time format', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('Bus eka 7.30 AM vedhdhi nuvarata yanavaa', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('Bus එක 7.30 AM වෙද්දි නුවරට යනවා');
  });

  test('Pos_Fun_0011: Mixed singlish + English', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('ID eka aragena enna edhdhi.', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('ID එක අරගෙන එන්න එද්දි.');
  });

  test('Pos_Fun_0012: Daily language use', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('api kadeeta yamu.', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('අපි කඩේට යමු.');
  });

  test('Pos_Fun_0013: Slang / Informal language', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('ela machan! supiri!! mama udheeta call ekak gannam oyaata', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('එල මචන්! සුපිරි!! මම උදේට call එකක් ගන්නම් ඔයට');
  });

  test('Pos_Fun_0014: Word combination pattern', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('hari hari mama pansal yadhdhi oyaata kathaa karannam.', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('හරි හරි මම පන්සල් යද්දි ඔයාට කතා කරන්නම්.');
  });

  test('Pos_Fun_0015: Request / Interrogative', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('karuNaakaralaa mata podi udhavvak karanna puLuvandha oyaata ?', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද ඔයාට ?');
  });

  test('Pos_Fun_0016: Daily usage', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('eyaa office yanavaa.', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('එයා office යනවා.');
  });

  test('Pos_Fun_0017: Complex question phrase', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('karuNaakaralaa sir, mata documents tika balanna puLuvandha? obathumaa LaGA documents tika thiyenava kiyala mama dhannavaa. 6pm vedhdhi documents tika evanna try karanna.', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('කරුණාකරලා sir, මට documents ටික බලන්න පුළුවන්ද? ඔබතුමා ළඟ documents ටික තියෙනව කියල මම දන්නවා. 6pm වෙද්දි documents ටික එවන්න try කරන්න.');
  });

  test('Pos_Fun_0018: Tech terms', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('mata WiFi ekea password eka oona.', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('මට WiFi එකේ password එක ඕන.');
  });

  test('Pos_Fun_0019: Abbreviations', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('ID eka genath dhenna heta.', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('ID එක ගෙනත් දෙන්න හෙට.');
  });

  test('Pos_Fun_0020: Date format', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('dhesaembar 25 mage birthday eka.', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('දෙසැම්බර් 25 mage birthday එක.');
  });

  test('Pos_Fun_0021: Short daily phrase', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('api kanna yamu.', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('අපි කන්න යමු.');
  });

  test('Pos_Fun_0022: Short request', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('mata call ekak ganna puluvan dha?', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('මට call එකක් ගන්න පුලුවන් ද?');
  });

  test('Pos_Fun_0023: Currency format', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('mata gedhara yanna train ticket eka ganna Rs.500 onee.', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('මට ගෙදර යන්න train ticket එක ගන්න Rs.500 ඔනේ.');
  });

  test('Pos_Fun_0024: Polite refusal', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('epaa, mata eeka karanna puLuvan.', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('එපා, මට ඒක කරන්න පුළුවන්.');
  });


  // --- 10 NEGATIVE FUNCTIONAL TESTS (Neg_Fun) ---
  // These are expected to FAIL with a "mismatch" as proof of system weakness. [cite: 308, 368]

  test('Neg_Fun_0001: Typographical error handling', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('mama gdhara yanavaa.', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('මම ගෙදර යනවා.');
  });

  test('Neg_Fun_0002: Mixed Singlish+English', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('I am going to bankuwa.', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('I am going to බැංකුව.');
  });

  test('Neg_Fun_0003: Extra long no-space input', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('hetaapiyanavaa', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('හෙට අපි යනවා');
  });

  test('Neg_Fun_0004: Mispelled Singlish word', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('uba nam waeddek!!', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('උබ නම් වැඩ්ඩෙක්!!');
  });

  test('Neg_Fun_0005: Non-standard English spelling', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('I go to banc', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('I go to බැන්ක්');
  });

  test('Neg_Fun_0006: Typo in request', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('mata help ekak dhenna enna puluvanda?', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('මට help එකක් දෙන්න එන්න පුලුවන්ද?');
  });

  test('Neg_Fun_0007: Mixed case gibberish', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('MaMa nUWAra YaNaWA', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('මම නුවර යනවා');
  });

  test('Neg_Fun_0008: Misspelled word', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('mama eeye pansalata aawaa', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('මම ඒයෙ පන්සලට ආවා');
  });

  test('Neg_Fun_0009: No-space input', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('oyaharimakadavasam', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('ඔයා හරිම කඩවසම්');
  });

  test('Neg_Fun_010: Misspelled command', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('vaeradhi dee nokaranna', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('වැරදි දේ නොකරන්න');
  });


  // --- 1 POSITIVE UI TEST (Pos_UI) ---
  // Validates real-time output behavior. [cite: 309, 372]

  test('Pos_UI_0001: Usability flow (real-time conversion)', async ({ page }) => {
    test.setTimeout(60000); 
    await page.locator('textarea').first().type('mama town yanavaa', { delay: 20 });
    const outputBox = page.locator('div.overflow-y-auto');
    await expect.poll(async () => outputBox.textContent(), { timeout: 15000 }).toContain('මම town යනවා');
  });

});