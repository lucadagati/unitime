<%-- 
 * Licensed to The Apereo Foundation under one or more contributor license
 * agreements. See the NOTICE file distributed with this work for
 * additional information regarding copyright ownership.
 *
 * The Apereo Foundation licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except in
 * compliance with the License. You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 --%>
<%@ taglib prefix="s" uri="/struts-tags" %>
<%@ taglib prefix="tt" uri="http://www.unitime.org/tags-custom" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@ taglib prefix="loc" uri="http://www.unitime.org/tags-localization" %>
<loc:bundle name="org.unitime.timetable.gwt.resources.GwtMessages"><s:set var="msg" value="#attr.MSG"/>
<s:form action="subjectList">
	<table class="unitime-MainTable">
 		<TR>
			<TD colspan="5">
				<tt:section-header>
					<tt:section-title>
						<s:property value="title"/>
					</tt:section-title>
					<sec:authorize access="hasPermission(null, 'Session', 'SubjectAreaAdd')">
						<tt:button value="%{#msg.buttonAddSubjectArea()}"/>
					</sec:authorize>
					<tt:button value="%{#msg.buttonExportPDF()}"/>
				</tt:section-header>
			</TD>
		</TR>
		<s:property value="table" escapeHtml="false"/>
		<TR>
			<TD class="WelcomeRowHead" colspan="5">
				&nbsp;
			</TD>
		</TR>
		<TR>
			<TD align="right" colspan="5">
				<sec:authorize access="hasPermission(null, 'Session', 'SubjectAreaAdd')">
					<tt:button value="%{#msg.buttonAddSubjectArea()}"/>
				</sec:authorize>
				<tt:button value="%{#msg.buttonExportPDF()}"/>
			</TD>
		</TR>
	</table>
</s:form>
</loc:bundle>
